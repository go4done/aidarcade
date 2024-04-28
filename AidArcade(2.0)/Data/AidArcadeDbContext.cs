using AidArcade_2._0_.Models.Domains;
using Microsoft.EntityFrameworkCore;

namespace AidArcade_2._0_.Data
{
    public class AidArcadeDbContext : DbContext
    {
        public AidArcadeDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Helper> Helpers { get; set; }
        public DbSet<Seeker> Seekers { get; set; }
        public DbSet<Request> Requests { get; set; }
    }
}
