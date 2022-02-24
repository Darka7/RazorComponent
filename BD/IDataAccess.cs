using Entity;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace BD
{
    public interface IDataAccess
    {
        IConfiguration config { get; }

        SqlConnection DBConection(string connId);
        Task<DBEntity> ExecuteAsync<U>(string Sp, U Param = default, string ConnId = "Conn1", int? Timeout = null);
        Task<IEnumerable<T>> QueryAsync<T>(string Sp, object Param = null, string ConnId = "Conn1", int? Timeout = null);
    }
}