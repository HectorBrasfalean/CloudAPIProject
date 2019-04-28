
using Microsoft.EntityFrameworkCore;
using System;

public class LibraryContext : DbContext
{
    public LibraryContext(DbContextOptions<LibraryContext> options)
                            : base(options)
    {

    }
    public DbSet<Footballer> Footballers { get; set; }
}
