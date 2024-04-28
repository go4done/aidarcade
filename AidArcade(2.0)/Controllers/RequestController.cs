using AidArcade_2._0_.Data;
using AidArcade_2._0_.Models.Domains;
using AidArcade_2._0_.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AidArcade_2._0_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private readonly AidArcadeDbContext _context;
        public RequestController(AidArcadeDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var requestsDomain = _context.Requests.ToList();

            var requestsDto = new List<AddRequestDto>();
            foreach (var requestDomain in requestsDomain)
            {
                requestsDto.Add(new AddRequestDto()
                {
                    Title = requestDomain.Title,
                    Description = requestDomain.Description
                });
            }
                
            return Ok(requestsDto);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var requestDomain = _context.Requests.FirstOrDefault(x => x.Id == id);

            if (requestDomain  == null) 
            {
                return NotFound();
            }

            var requestDto = new AddRequestDto()
            {
                Title = requestDomain.Title,
                Description = requestDomain.Description
            };

            return Ok(requestDto);
        }

        [HttpPost]
        public IActionResult Create([FromBody] AddRequestDto addRequestDto)
        {
            var RequestDomainModel = new Request
            {
                Title = addRequestDto.Title,
                Description = addRequestDto.Description
            };

            _context.Requests.Add(RequestDomainModel);
            _context.SaveChanges();

            var requestDto = new RequestDto()
            {
                Title = RequestDomainModel.Title,
                Description = RequestDomainModel.Description
            };

            return CreatedAtAction(nameof(GetById), new { id = RequestDomainModel.Id}, requestDto);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var requestDomainModel = _context.Requests.FirstOrDefault(x => x.Id == id);

            if (requestDomainModel == null)
            {
                return NotFound();
            }

            _context.Requests.Remove(requestDomainModel);
            _context.SaveChanges();

            var requestDto = new RequestDto()
            {
                Id = requestDomainModel.Id,
                Title = requestDomainModel.Title,
                Description = requestDomainModel.Description
            };
            return Ok(requestDto);
        }
    }
}
