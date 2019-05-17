using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APIServer.Controllers
{
    [Route("api/footballers")]
    [ApiController]
    public class FootballerController : ControllerBase
    {
        LibraryContext context;

        public FootballerController(LibraryContext ctx)
        {
            this.context = ctx;
        }

        [HttpGet]
        [Authorize]
        public List<Footballer> GetFootballers(string nationality, int? weight,
                                                 string sortBy, string direction = "asc",
                                                 int pageSize = 6, int page = 0)
        {
            IQueryable<Footballer> query = context.Footballers;
            if (!string.IsNullOrEmpty(nationality))
                query = query.Where(b => b.Nationality == nationality);

            if (weight != null)
                query = query.Where(b => b.Weight == weight);

            if (string.IsNullOrEmpty(sortBy))
                sortBy = "id";

            switch (sortBy.ToLower())
            {
                case "id":
                    if (direction == "asc")
                        query = query.OrderBy(b => b.Id);
                    else if (direction == "desc")
                        query = query.OrderByDescending(b => b.Id);
                    break;
                case "weight":
                    if (direction == "asc")
                        query = query.OrderBy(b => b.Weight);
                    else if (direction == "desc")
                        query = query.OrderByDescending(b => b.Weight);
                    break;
                case "length":
                    if (direction == "asc")
                        query = query.OrderBy(b => b.Length);
                    else if (direction == "desc")
                        query = query.OrderByDescending(b => b.Length);
                    break;
                default:
                    if (direction == "asc")
                        query = query.OrderBy(b => b.Nationality);
                    else if (direction == "desc")
                        query = query.OrderByDescending(b => b.Nationality);
                    break;
            }
            if (pageSize > 15)
                pageSize = 15;

            query = query.Skip(page * pageSize);
            query = query.Take(pageSize);

            return query.ToList();
        }

        [Authorize]
        [HttpGet("{id}")]
        public ActionResult<Footballer> GetFootballerById(int id)
        {
            var footballer = context.Footballers
                            .SingleOrDefault(b => b.Id == id);     

            if (footballer == null)
                return NotFound();
            else
                return footballer;
        }

        [Authorize]
        [HttpPost]
        public ActionResult<Footballer> AddFootballer([FromBody] Footballer footballer)
        {
            var tempFootballer = context.Footballers.FirstOrDefault(o => o.Name == footballer.Name);
            if (tempFootballer != null)
                return NoContent();
            context.Footballers.Add(footballer);
            context.SaveChanges();
            return Created("", footballer);
        }

        [Authorize]
        [HttpPut("{id}")]
        public ActionResult<Footballer> UpdateBook([FromBody]Footballer footballer)
        {
            context.Footballers.Update(footballer);
            context.SaveChanges();

            return Created("", footballer);
        }

        [Route("{id}")]
        [HttpDelete]
        [Authorize]
        public ActionResult<Footballer> Delete(int id)
        {

            var footballer = context.Footballers.Find(id);
            if (footballer == null)
                return NotFound();

            context.Footballers.Remove(footballer);
            context.SaveChanges();
            return NoContent();
        }
    }
}
