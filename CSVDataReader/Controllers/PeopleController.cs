using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CSVDataReader.Models;
using CSVDataReader.Service;

namespace CSVDataReader.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly PersonContext _context;
        private readonly CSVService service;

        public PeopleController(PersonContext context, CSVService service)
        {
            this._context = context;
            this.service = service;
        }

        // CSV SERVIS
        [HttpGet("CSV")]
        public Person[] GetCSVData()
        {
            return service.GetCSVData(); ;
        }

        [HttpPost]
        public async Task<ActionResult<Person[]>> PostPerson(Person[] people)
        {
            foreach(var person in people)
            {
                if (PersonExists(person)) continue;
                
                _context.People.Add(person);
                await _context.SaveChangesAsync();
            }
            
            return CreatedAtAction("GetPerson", new { people }, people);
        }

        private bool PersonExists(Person person)
        {
            return _context.People.Any(e => e.Name == person.Name 
                                        && e.Surname == person.Surname 
                                        && e.PostalCode == person.PostalCode 
                                        && e.Phone == person.Phone
                                        && e.City == person.City);
        }
    }
}
