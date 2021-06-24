using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouDontKnowEgypt.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace YouDontKnowEgypt
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        string s = "any value";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
      services.AddDbContext<YouDontKnowEgyptContext>(dbContextOption =>
          dbContextOption.UseLazyLoadingProxies()
          .ConfigureWarnings(warnings => warnings.Ignore(CoreEventId.DetachedLazyLoadingWarning))
          .UseSqlServer(Configuration.GetConnectionString("YouDontKnowEgypt")));

      services.AddControllers().AddNewtonsoftJson(x=>x.SerializerSettings.ReferenceLoopHandling=Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "YouDontKnowEgypt", Version = "v1" });
            });
            services.AddCors(options =>
            {
                options.AddPolicy(s, builder =>
                 {
                     builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod(); ;
                 });
            });
            services.Configure<FormOptions>(o => {
              o.ValueLengthLimit = int.MaxValue;
              o.MultipartBodyLengthLimit = int.MaxValue;
              o.MemoryBufferThreshold = int.MaxValue;
            });
    }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "YouDontKnowEgypt v1"));
                app.UseCors(s);
      }
            app.UseStaticFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
              FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
              RequestPath = new PathString("/Resources")
            });
      app.UseRouting();

            app.UseCors(s);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
