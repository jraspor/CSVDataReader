using CSVDataReader.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CSVDataReader.Service
{
    public class CSVService
    {
        public Person[] GetCSVData()
        {
            List<Person> people = new List<Person>();

            using (var reader = new StreamReader(@"C:\Users\jraspor\source\repos\CSVDataReader\CSVDataReader\CSVFile\podaci.csv"))
            {
                while (!reader.EndOfStream)
                {
                    var person = new Person();
                    var line = reader.ReadLine();
                    var values = line.Split(';');

                    person.Name = values[0];
                    person.Surname = values[1];
                    person.PostalCode = values[2];
                    person.City = values[3];
                    person.Phone = values[4];

                    people.Add(person);
                }
            }
            Person[] people_array = people.ToArray();

            return people_array;
        }
    }
}
