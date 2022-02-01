using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RazorComponent
{
    public class Vue
    {

        public static IHtmlContent ForHtml<TModel, TProperty>(Expression<Func<TModel, TProperty>> property)
        {
            var propertyName = property.Body?.ToString();

            propertyName= propertyName
                .Replace("ToString", "toString")
                ;
            return new HtmlString("{{"+$"{propertyName}"+"}}");
        }

        public static IHtmlContent ForHtml(string key)
        {
          
            return new HtmlString("{{" + $"{key}" + "}}");
        }

        public static IHtmlContent ForHtml<TModel, TProperty>(string key, Expression<Func<TModel, TProperty>> property)
        {
            var propertyName = property.Body?.ToString();
            propertyName = propertyName
               .Replace("ToString", "toString")
               ;
            return new HtmlString("{{" + $"{key},{propertyName}" + "}}");
        }

        public static IHtmlContent For<TModel, TProperty>(Expression<Func<TModel, TProperty>> property)
        {
            var propertyName = property.Body?.ToString();

            propertyName = propertyName
                .Replace("ToString", "toString")
                ;
            return new HtmlString( $"{propertyName}");
        }
        public static IHtmlContent Raw(string property)
        {
            
            

            return new HtmlString("{{ "+$"{property}"+" }}");
        }


    }
}
