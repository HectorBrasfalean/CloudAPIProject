using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIServer.Model
{
    public class FootballClub
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Stadium { get; set; }

        public string Country { get; set; }

        public string Established { get; set; }


        [JsonIgnore]
        public ICollection<Footballer> Footballers { get; set; }

    }
}
