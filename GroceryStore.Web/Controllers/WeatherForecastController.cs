﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryStore.Store;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GroceryStore.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly UnitOfWork _unitOfWork;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, UnitOfWork unitOfWork)
        {
            _logger = logger;
            this._unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
