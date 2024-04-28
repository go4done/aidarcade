using AidArcade_2._0_.Data;
using AidArcade_2._0_.Models.Domains;
using AidArcade_2._0_.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace AidArcade_2._0_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeekerController : ControllerBase
    {
        private readonly AidArcadeDbContext _context;

        public SeekerController(AidArcadeDbContext context)
        {
            _context = context;
        }
        // Реєстрація для сікерів
        [HttpPost("register-seeker")]
        public async Task<IActionResult> RegisterSeeker([FromBody] RegisterDto registerDto)
        {
            if (await _context.Seekers.AnyAsync(x => x.Nickname == registerDto.Nickname))
                return BadRequest("Email already in use.");

            CreatePasswordHash(registerDto.Password, out byte[] passwordHash);
            var seeker = new Seeker
            {
                Nickname = registerDto.Nickname,
                PasswordHash = Convert.ToBase64String(passwordHash)
            };
            _context.Seekers.Add(seeker);
            await _context.SaveChangesAsync();
            return StatusCode(201); // Created
        }

        // Логін для сікерів
        [HttpPost("login-seeker")]
        public async Task<IActionResult> LoginSeeker([FromBody] LoginDto loginDto)
        {
            var user = await _context.Seekers.FirstOrDefaultAsync(x => x.Nickname == loginDto.Nickname);

            if (user == null || !VerifyPasswordHash(loginDto.Password, Convert.FromBase64String(user.PasswordHash)))
                return Unauthorized("Invalid login attempt.");

            return Ok("Login successful");
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] storedHash)
        {
            using (var hmac = new HMACSHA512())
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }
            return true;
        }
    }
}

