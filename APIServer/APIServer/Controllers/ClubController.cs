using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIServer.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIServer.Controllers
{
    [Route("api/clubs")]
    [ApiController]
    public class ClubController : ControllerBase
    {
        LibraryContext context;

        public ClubController(LibraryContext ctx)
        {
            this.context = ctx;
        }

        [HttpGet]
        public List<FootballClub> GetFootballClubs()
        {
            return context.FootballClubs.ToList();
        }
    }
}