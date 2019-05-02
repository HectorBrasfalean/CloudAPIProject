
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
            Footballer[] footballers =
            {
                new Footballer()
            {
                Name = "Lionel Messi",
                Born = "24 June 1987",
                Nationality = "Argentine",
                Length = 1.74,
                Weight = 72,
            },
            new Footballer()
            {
                Name = "Cristiano Ronaldo",
                Born = "5 February 1985",
                Nationality = "Portugese",
                Length = 1.89,
                Weight = 84,
            },
            new Footballer()
            {
                Name = "Ousmane Dembele",
                Born = "15 May 1997",
                Nationality = "French",
                Length = 1.78,
                Weight = 67,
            },
            new Footballer()
            {
                Name = "Luis Suarez",
                Born = "24 January 1987",
                Nationality = "Uruguayan",
                Length = 1.82,
                Weight = 86,
            },
            new Footballer()
            {
                Name = "Gerard Pique",
                Born = "2 February 1987",
                Nationality = "Spanish",
                Length = 1.94,
                Weight = 85,
            },
            new Footballer()
            {
                Name = "Gerard Pique",
                Born = "2 February 1987",
                Nationality = "Spanish",
                Length = 1.94,
                Weight = 85,
            },
            new Footballer()
            {
                Name = "Marc Andre Ter Stegen",
                Born = "30 April 1992",
                Nationality = "German",
                Length = 1.87,
                Weight = 85,
            },
            new Footballer()
            {
                Name = "Ivan Rakitic",
                Born = "10 March 1988",
                Nationality = "Croatian",
                Length = 1.84,
                Weight = 76,
            },
            new Footballer()
            {
                Name = "Luka Modric",
                Born = "9 September 1985",
                Nationality = "Croatian",
                Length = 1.72,
                Weight = 66,
            },
            new Footballer()
            {
                Name = "Sergio Busquets",
                Born = "16 July 1988",
                Nationality = "Spanish",
                Length = 1.89,
                Weight = 76,
            },
            new Footballer()
            {
                Name = "Jordi Alba",
                Born = "21 March 1989",
                Nationality = "Spanish",
                Length = 1.70,
                Weight = 68,
            },
            new Footballer()
            {
                Name = "Philippe Coutinho",
                Born = "12 June 1992",
                Nationality = "Brazilian",
                Length = 1.72,
                Weight = 72,
            },
            new Footballer()
            {
                Name = "Neymar",
                Born = "5 February",
                Nationality = "Brazilian",
                Length = 1.75,
                Weight = 68,
            }
        };
        foreach (Footballer footballer in footballers)
        {
                context.Footballers.Add(footballer);
        }
        context.SaveChanges();
        }
    }
}
