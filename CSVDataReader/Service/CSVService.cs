using CSVDataReader.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSVDataReader.Service
{
    public class CSVService
    {
        public Person[] GetCSVData()
        {
            Person[] people = {
              // new Person("Josipa", "Raspor", 22, "Rijeka", 2)
            };
            Console.Write("Bok, tu sam!");
            return people;
        }
    }
}
