using AidArcade_2._0_.Models.Domains;

namespace AidArcade_2._0_.Models.DTO
{
    public class RequestDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string SeekerId { get; set; }
        public string HelperId { get; set; }

        public Seeker Seeker { get; set; }
        public Helper Helper { get; set; }
    }
}
