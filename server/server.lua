local QBCore = exports["qb-core"]:GetCoreObject()
-----------------------------------------------
function string.fromhex(str)
    return (str:gsub("..", function(cc)
        return string.char(tonumber(cc, 16))
    end))
end

function IsPolice(src)
    local s = src
    local Player = QBCore.Functions.GetPlayer(s)
    local Job = Player.PlayerData.job.name
    if Job == "police" then
        return true
    else
        return false
    end
end

local random = math.random
local function uuid()
    local template = "xyxyx"
    return string.gsub(template, "[xy]", function(c)
        local v = (c == "x") and random(0, 0xf) or random(8, 0xb)
        return string.format("%x", v)
    end)
end

function GetAllPolices()
    local p = promise.new()
    --     -- local PolicesAmount = MySQL.query.await(
    --     --     "SELECT citizenid,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS name,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname, JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.grade.name')) AS rank,JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.name')) AS jobname, JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.onduty')) AS onduty FROM `players` WHERE `job` LIKE '%police%'"
    --     -- )
    local Data = {}
    for _, Player in pairs(QBCore.Functions.GetQBPlayers()) do
        if Player.PlayerData.job.name == "police" then
            Data[#Data + 1] = {src = Player.PlayerData.source}
        end
    end
    p:resolve(Data)
    return Citizen.Await(p)
end

-----------------------------------------------
-- THIS VARIABLE HANDLE A KEY = NAME OF THE FUNCTION AND A
local contain = {
    name = function(data)
        return MySQL.query.await("SELECT * FROM fx_reports WHERE name = ?", {data})
    end,
    localization = function(data)
        return MySQL.query.await(
            "SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE JSON_UNQUOTE(JSON_EXTRACT(fx_reports.localization,'$.location')) LIKE ?",
        {string.lower("%" .. data .. "%")})
    end,
    citizenid = function(data)
        return MySQL.query.await("SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE citizenid = ?", {data})
    end,
    id = function(data)
        return MySQL.query.await("SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE id LIKE ? ", {string.lower("%" .. data .. "%")})
    end,
    data = function(data)
        return MySQL.query.await(
            "SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE JSON_UNQUOTE(JSON_EXTRACT(fx_reports.`data`,'$.polices[*]')) LIKE ?",
        {string.lower("%" .. data .. "%")})
    end,
    all = function(data)
        return MySQL.query.await("SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE fx_reports.type = 'bolo' OR  fx_reports.type = 'warrant' OR  fx_reports.type = 'report' ")
    end,
    searchUser = function(data)
        local query =
        "SELECT JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS firstname,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname,players.citizenid AS citizenid,players.bolo AS bolo,JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.name')) AS jobname ,JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.label')) AS rank FROM players where players.charinfo LIKE ?"
        return MySQL.query.await(query, {string.lower("%" .. data .. "%")})
    end,
    getVehicleInfo = function(types, data)
        local query = ""
        local ret = ""
        if types == "citizenid" then
            query =
            "SELECT JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.color1')) AS color,JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.plate')) AS plate,vehicle AS model,bolo AS bolo FROM player_vehicles WHERE citizenid = ?"
            ret = MySQL.query.await(query, {data})
        elseif types == "plate" then
            query =
            "SELECT players.citizenid,player_vehicles.bolo AS bolo, JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS firstname,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname, JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.color1')) AS color, plate AS plate, player_vehicles.vehicle AS model FROM player_vehicles INNER JOIN players WHERE players.citizenid = player_vehicles.citizenid AND plate = ?"
            ret = MySQL.query.await(query, {data})[1]
        else
            Citizen.Trace("ERROR no valid argument passed")
            return
        end
        return ret
    end,
}

function GetVehicleByData(citizenid)

    local veh = contain["getVehicleInfo"]("citizenid", citizenid)
    local p = promise.new()
    local vehInfo = {} -- DONT LIKE THIS, NEED TO MAKE IT BETTER
    for i = 1, #veh do
        local el = veh[i]
        vehInfo[#vehInfo + 1] = {
            name = QBCore.Shared.Vehicles[el.model].name,
            model = el.model,
            color = el.color,
            plate = el.plate,
            category = QBCore.Shared.Vehicles[el.model].category,
            bolo = el.bolo,
            citizenid = el.citizenid,
        }
    end
    p:resolve(vehInfo)
    return Citizen.Await(p)
end

QBCore.Functions.CreateCallback("fx-mdt:server:searchForPlayer", function(source, cb, name, app)
    local src = source
    local Data = {}
    local Charinfo = contain["searchUser"](tostring(name))
    local Reports = {}
    if IsPolice(src) then
        if app == "search" then
            print("104")
            if Charinfo then
                for k, v in ipairs(Charinfo) do
                    local el = Charinfo[k]
                    if contain["citizenid"](el.citizenid) then
                        for k, v in ipairs(contain["citizenid"](el.citizenid)) do
                            local el = contain["citizenid"](el.citizenid)[k]
                            Reports[#Reports + 1] = {
                                title = el.title,
                                name = el.name,
                                id = el.id,
                                data = json.decode(el.data),
                                location = el.location,
                                coords = el.coords,
                            }
                        end
                    end
                    print("121")
                    Data[#Data + 1] = {
                        Name = el.firstname,
                        LastName = el.lastname,
                        CitizenID = el.citizenid,
                        Rank = el.rank,
                        JobName = el.jobname,
                        Vehicles = GetVehicleByData(el.citizenid),
                        Reports = Reports,
                        Bolo = el.bolo,
                    }
                end
            end
        elseif app == "report" then -- if the app is "report" we dont need the vehicle info or reports
            if Charinfo then
                for k, v in ipairs(Charinfo) do
                    local el = Charinfo[k]
                    Data[#Data + 1] = {
                        Name = el.firstname,
                        LastName = el.lastname,
                        CitizenID = el.citizenid,
                    }
                end
            end
        end
        cb(Data)
    end
end)

QBCore.Functions.CreateCallback("fx-mdt:server:GetEvidence", function(source, cb)
    local src = source
    if IsPolice(src) then

        local Blood = {}
        local Player = QBCore.Functions.GetPlayer(src)
        local Item = Player.Functions.GetItemsByName("filled_evidence_bag")
        if Item then
            for k, v in ipairs(Item) do
                local element = Item[k]
                if element.info.type == "blood" then
                    --local spl = string.fromhex(element.info.dnalabel)
                    Blood[#Blood + 1] = {
                        id = uuid(),
                        type = element.info.type,
                        street = element.info.street,
                        bloodtype = element.info.bloodtype,
                        label = element.info.dnalabel,
                    }
                else
                    if element.info.type == "casing" then
                        Blood[#Blood + 1] = {
                            id = uuid(),
                            type = element.info.type,
                            street = element.info.street,
                            ammotype = element.info.ammotype,
                            label = element.info.ammolabel,
                        }
                    end
                end
            end
        end
        cb(Blood)
    end
end)
QBCore.Functions.CreateCallback("fx-mdt:server:getFines", function(source, cb, id)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if id == Player.PlayerData.citizenid then
        local result = MySQL.query.await("SELECT  id,title,amount FROM fx_reports WHERE citizenid = ?", {id})
        cb(result)
    end
end)
QBCore.Functions.CreateCallback("fx-mdt:server:payFine", function(source, cb, amount, id)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    -- Get All Players
    if Player.PlayerData.citizenid then
        if Player.Functions.RemoveMoney("cash", amount, "Pago la fianza con la id "..id) then
            exports["qb-management"]:AddMoney("police", amount)
            local result = MySQL.query.await("DELETE FROM fx_reports WHERE id = ?", {id})
            cb(true)
        else
            cb(false)
        end
    end

end)

QBCore.Functions.CreateCallback("fx-mdt:server:GetAllPolices", function(source, cb)
    -- ADD CHECK IF THE PLAYER IS A POLICE
    if IsPolice(source) then
        local polices = GetAllPolices()

        cb(polices)
    end
end)

QBCore.Functions.CreateCallback("fx-mdt:server:setNewReport", function(source, cb, data)
    local coords = GetEntityCoords(GetPlayerPed(source))
    local data1 = GetAllPolices()
    if data.report then
        if data.report.type == "basic" then
            TriggerEvent("qb-phone:server:sendNewMailToOffline", data.report.citizenid, {sender = "Police Depto", subject = " Fine situation", message = "A fine has been created the amount to pay is $"..data.report.amount.." if you need more information, please go to the police station and give this code "..data.report.id.." to the officer."})
        end

        Wait(100)
        MySQL.query(
            "INSERT INTO fx_reports (id,title,name,lastname,citizenid,location,coords,observations,data,amount,type) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
            {
                tostring(data.report.id),
                tostring(data.report.title),
                tostring(data.report.name),
                tostring(data.report.lastname),
                tostring(data.report.citizenid),
                data.report.location,
                json.encode(coords),
                tostring(data.report.observations),

                json.encode(data.report.data),
                data.report.amount,
                data.report.type or "basic",
            })

            if data.report.bolo and data.report.isvehicle then
                MySQL.query("UPDATE player_vehicles SET bolo = 1 WHERE plate = ?", {tostring(data.report.plate)})
            end
            for i = 1, #data1 do
                local el = data1[i]
                TriggerClientEvent("fx-mdt:client:UpdateReports", el.src, contain["all"](""))
            end

            cb({type = true, reports = {}})
        end
    end)

    QBCore.Functions.CreateCallback("fx-mdt:server:getReportData", function(source, cb, data)
        local Data = {}
        local data1 = GetAllPolices()

        if contain[tostring(data.type)] then
            local DataReturn = contain[tostring(data.type)](data.value)
            for k, v in ipairs(DataReturn) do
                local el = DataReturn[k]
                Data[#Data + 1] = {
                    id = el.id,
                    name = el.name,
                    lastname = el.lastname,
                    citizenid = el.citizenid,
                    data = json.decode(el.data),
                    title = el.title,
                    location = el.location,
                    type = el.type,
                    taked = el.taked,
                    observations = el.observations,
                    callsign = el.callsign,
                    amount = el.amount
                }
            end
            if tostring(data.type) == "all" then
                local DataReturn = contain["all"]("")
                for k, v in ipairs(DataReturn) do
                    local el = DataReturn[k]
                    Data[#Data + 1] = {
                        id = el.id,
                        name = el.name,
                        lastname = el.lastname,
                        citizenid = el.citizenid,
                        data = json.decode(el.data),
                        title = el.title,
                        location = el.location,
                        type = el.type,
                        observations = el.observations,
                        taked = el.taked,
                        callsign = el.callsign,
                        amount = el.amount
                    }
                end
                for i = 1, #data1 do
                    local el = data1[i]
                    TriggerClientEvent("fx-mdt:client:UpdateReports", el.src, Data)
                end
            end

            cb(Data)
        end
    end)

    QBCore.Functions.CreateCallback("fx-mdt:server:deleteReport", function(source, cb, id)
        if IsPolice(source) then
            local result = MySQL.query.await("DELETE FROM fx_reports WHERE id = ?", {id.id})
            local deleteassignament = MySQL.query.await("DELETE FROM fx_assignment WHERE caseid = ?", {id.id})
            -- GetMyCalls SEND AN UPDATE VERSION OF THE CALLSIGN
            TriggerClientEvent("fx-mdt:client:sendUpdateCalls", -1, GetMyCalls(id.callsign))
            cb(result.affectedRows > 0 and true or false)
            TriggerEvent("fx-mdt:server:UpdateReports")
        end
    end)

    -- RegisterServerEvent("fx-apartment:server:CheckTicket", function()
    --     local src = source
    --     local Data = QBCore.Functions.GetPlayer(src)
    --     local item = Data.Functions.GetItemByName("gold_ticket_app")
    --     if not item then
    --         TriggerClientEvent("QBCore:Notify", src, "No Ticket")
    --         return
    --     end
    --     if not Data.PlayerData.citizenid == item.info.citizenid then
    --         TriggerClientEvent("QBCore:Notify", src, "This ticket isnt yours")
    --         return
    --     end
    --     TriggerClientEvent("fx-apartment:client:ChangeTicket", src, Data.PlayerData.citizenid)
    -- end)

    QBCore.Functions.CreateCallback("fx-mdt:server:getVehicleByPlate", function(source, cb, plate)
        local src = source
        local Data = {}
        if IsPolice(source) then
            -- Add check for police and if is in the tablet and in the same position
            if contain["getVehicleInfo"]("plate", plate) then
                local vi = contain["getVehicleInfo"]("plate", plate)
                Data = {
                    name = vi.model,
                    plate = vi.plate,
                    color = vi.color,
                    category = QBCore.Shared.Vehicles[vi.model].category,
                    bolo = vi.bolo,
                    citizenid = vi.citizenid,
                    firstname = vi.firstname,
                    lastname = vi.lastname,
                }
                cb(Data)
            end
        end
    end)

    RegisterServerEvent("fx-mdt:server:UpdateReports", function()
        Wait(200)
        local data = GetAllPolices()

        MySQL.query("SELECT * FROM fx_reports WHERE fx_reports.type = 'bolo' OR  fx_reports.type = 'warrant' OR  fx_reports.type = 'report'", function(res)
            for i = 1, #data do
                local el = data[i]
                TriggerClientEvent("fx-mdt:client:UpdateReports", el.src, res)
            end
        end)

    end)
    ----
    QBCore.Functions.CreateCallback("fx-mdt:server:updateReport", function(source, cb, id, data)
        local src = source
        if IsPolice(src) then
            local data1 = GetAllPolices()

            MySQL.query("UPDATE fx_reports SET taked = 1,callsign = ? WHERE id = ?", {data.callsign, id.id}, function(res)
                if res then
                    MySQL.insert("INSERT INTO fx_assignment (caseid,localization,coordinates,citizenid,name,callsign) VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE caseid = ? ",
                    {id.id, id.location, id.coords, id.citizenid, id.name, data.callsign, id.id})
                    for i = 1, #data1 do
                        local el = data1[i]
                        TriggerClientEvent("QBCore:Notify", el.src, "Unit: "..data.callsign.." has taken the report ID: "..id.id)
                    end

                    cb(true)
                    TriggerEvent("fx-mdt:server:UpdateReports")
                end
            end)
            cb(false)
        end
    end)
    QBCore.Functions.CreateCallback("fx-mdt:server:getMyCalls", function(source, cb, id)
        local src = source
        local send = {}
        if IsPolice(src) then
            local Data = GetMyCalls(id)
            cb(Data)
        end
        --add a check if is a police
    end)

    function GetMyCalls(id)
        local src = source
        local send = {}
        local p = promise.new()
        local Data = MySQL.query.await(
            "SELECT caseid,localization,coordinates,citizenid,name,callsign FROM fx_assignment WHERE callsign = ?",
        {id})
        for k, v in each(Data) do
            local el = Data[k]
            send[#send + 1] = {
                casid = el.caseid,
                localization = el.localization,
                coordinates = el.coordinates,
                citizenid = el.citizenid,
                name = el.name,
                callsign = el.callsign,
            }
            p:resolve(send)
            return Citizen.Await(p)
        end

    end
    QBCore.Functions.CreateCallback("fx-mdt:server:deleteCall", function(source, cb, id)
        if IsPolice(source) then
            local Data = MySQL.query.await("DELETE FROM fx_assignment  WHERE caseid = ?", {id})
            local Update = MySQL.query("UPDATE fx_reports SET taked = 0,callsign = 'none' WHERE id = ?", {id})

            TriggerEvent("fx-mdt:server:UpdateReports")
            cb(true)
        end
    end)

    RegisterServerEvent("fx-mdt:server:newReportFromCommand", function(data)
        local src = source
        local id = uuid()
        local Title = "Basic Report"

        if type(data) == "table" then
            local streetName, coords, name, lastname, citizenid, phone, message in data
            MySQL.query(
                "INSERT INTO fx_reports (id,title,name,lastname,citizenid,location,coords,observations,data,amount,type) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                {
                    tostring(id),
                    tostring(Title),
                    tostring(name),
                    tostring(lastname),
                    tostring(citizenid),
                    streetName,
                    json.encode(coords),
                    tostring(message),
                    json.encode({evidences = {}, polices = {}, fines = {}}),
                    0,
                    "report",
                })
                Wait(200)
                TriggerEvent("fx-mdt:server:UpdateReports")
            end
        end)
        QBCore.Commands.Add("fxr", "Update a report", {name = "id", help = "ID of the report"}, false, function(source, args)
            local id = tostring(args[1])
            local rep = MySQL.query.await("UPDATE fx_reports SET callsign = '' , taked = 0 WHERE id = ?", {id})
            local Res = MySQL.query.await("SELECT EXISTS(SELECT 1 FROM fx_assignment WHERE caseid = ? LIMIT 1) AS EX", {id})[1]
            if Res.EX == 1 then
                local Data = MySQL.query.await("DELETE FROM fx_assignment  WHERE caseid = ?", {id})

            end
            TriggerEvent("fx-mdt:server:UpdateReports")
        end, "admin")

        RegisterCommand("test", function(source, args)
            -- body

        end)