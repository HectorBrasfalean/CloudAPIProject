using APIServer.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class Footballer
{
    public int Id { get; set; }
    public string Name { get; set; }

    public string Born { get; set; }
    public string Nationality { get; set; }
    public double Length { get; set; }

    [Required]
    [Range(1, 150)]
    public double? Weight { get; set; }

    public FootballClub FootballClub { get; set; }

    public int ClubId { get; set; }

}
