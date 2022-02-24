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

        Task<DBEntity> ExecuteAsync<U>(string Sp, U Param = default, string ConnId = "Conn1", int? Timeout = null);
        Task<IEnumerable<T>> QueryAsync<T, U>(string Sp, U Param = default, string ConnId = "Conn1", int? Timeout = null);
    }
}