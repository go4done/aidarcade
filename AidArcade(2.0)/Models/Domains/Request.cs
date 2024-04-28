using System.ComponentModel.DataAnnotations;

namespace AidArcade_2._0_.Models.Domains
{
    public class Request
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int SeekerId { get; set; }
        public Seeker Seeker { get; set; }
        public Helper Helper { get; set; }

    }
}
