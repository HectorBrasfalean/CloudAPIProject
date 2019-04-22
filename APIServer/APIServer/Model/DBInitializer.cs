using APIServer.Model;
using System;
using System.Linq;

public class DBInitializer
{

    public static void Initialize(LibraryContext context)
    {
        //Create the db if not yet exists
        context.Database.EnsureCreated();

        //Are there already books present ?
        if (!context.Footballers.Any())
        {


            var footballClub1 = new FootballClub()
            {
                Name = "Fútbol Club Barcelona",
                Stadium = "Camp Nou",
                Country = "Spain",
                Established = "29 november 1899",
            };


            var footballer1 = new Footballer()
            {
                Name = "Lionel Messi",
                Born = "24 June 1987",
                Nationality = "Argentine",
                Length = 1.74,
                Weight = 72,
                FootballClub = footballClub1
            };

            context.Footballers.Add(footballer1);
            context.FootballClubs.Add(footballClub1);
            context.SaveChanges();
        }
    }
}
