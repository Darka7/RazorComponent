
using Dapper;
using Entity;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BD
{
    public class DataAccess : IDataAccess
    {

        public IConfiguration config { get; }

        public DataAccess(IConfiguration config)
        {
            this.config = config;

        }

        public SqlConnection DBConection(string connId)
        {
            var ConnString = new SqlConnectionStringBuilder(config.GetConnectionString(connId))
            {
                PacketSize = 32767,
                MaxPoolSize = 1000,
                Pooling = true,
                MultiSubnetFailover = true,
            }.ConnectionString;
            return new SqlConnection(ConnString);
        }

        public async Task<IEnumerable<T>> QueryAsync<T, U>(string Sp, U Param = default, string ConnId = "Conn1", int? Timeout = null)
        {
            try
            {
                using (var exec = DBConection(ConnId))
                {
                    await exec.OpenAsync();

                    var result = exec.QueryAsync<T>(sql: Sp, param: new DynamicParameters(Param),
                        commandType: CommandType.StoredProcedure, commandTimeout: Timeout);

                    return await result;

                }
            }
            catch (Exception)
            {

                throw;
            }
        }


        public async Task<DBEntity> ExecuteAsync<U>(string Sp, U Param = default, string ConnId = "Conn1", int? Timeout = null)
        {
            try
            {
                using (var exec = DBConection(ConnId))
                {
                    await exec.OpenAsync();

                    var result = await exec.ExecuteReaderAsync(sql: Sp, param: new DynamicParameters(Param),
                        commandType: CommandType.StoredProcedure, commandTimeout: Timeout);

                    await result.ReadAsync();

                    if (result.HasRows)
                    {
                        return new()
                        {
                            CodeError = result.GetInt32(0),
                            MsgError = result.GetString(0)
                        };
                    }
                    else if (result.RecordsAffected > 0)
                    {
                        return new();
                    }
                    else
                    {
                        return new()
                        {
                            CodeError = 1,
                            MsgError = "No tuvo afectacion en la base de datos!"

                        };
                    }

                }
            }
            catch (Exception)
            {

                throw;
            }
        }




    }
}
