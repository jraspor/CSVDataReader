using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CSVDataReader.Models
{
    public class Person
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(30)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Surname { get; set; }
        [Required]
        public int PostalCode { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string City { get; set; }
        [Required]
        public int Phone { get; set; }
    }
}
