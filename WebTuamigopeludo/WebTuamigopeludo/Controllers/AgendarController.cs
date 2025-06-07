using Microsoft.AspNetCore.Mvc;
using WebTuamigopeludo.Data;
using WebTuamigopeludo.Models;
using Microsoft.EntityFrameworkCore;

namespace WebTuamigopeludo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AgendarController : ControllerBase
    {
        private readonly AppDBContext _appDBContext;

        public AgendarController(AppDBContext appDBContext)
        {
            _appDBContext = appDBContext;
        }

        // GET: api/Agendar
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Citas>>> GetCitas()
        {
            var lista = await _appDBContext.Citas.ToListAsync();
            return Ok(lista);
        }

        // GET: api/Agendar/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Citas>> GetCitaPorId(int id)
        {
            var cita = await _appDBContext.Citas.FindAsync(id);
            if (cita == null)
                return NotFound();

            return Ok(cita);
        }

        // POST: api/Agendar
        [HttpPost]
        public async Task<ActionResult<Citas>> PostCita([FromBody] Citas citas)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            citas.Estado = 1; // Activa
            await _appDBContext.Citas.AddAsync(citas);
            await _appDBContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCitaPorId), new { id = citas.IdCita }, citas);
        }

        // PUT: api/Agendar/Cancelar/5
        [HttpPut("Cancelar/{id}")]
        public async Task<IActionResult> Cancelar(int id)
        {
            var cita = await _appDBContext.Citas.FirstOrDefaultAsync(c => c.IdCita == id);
            if (cita == null)
                return NotFound();

            cita.Estado = 2; // Cancelada
            _appDBContext.Citas.Update(cita);
            await _appDBContext.SaveChangesAsync();

            return Ok(new { mensaje = "Cita cancelada con éxito." });
        }

        // GET: api/Agendar/Consultar?tipoDocumento=CC&documento=123456789
        [HttpGet("Consultar")]
        public async Task<IActionResult> Consultar([FromQuery] string tipoDocumento, [FromQuery] string documento)
        {
            if (string.IsNullOrWhiteSpace(tipoDocumento) || string.IsNullOrWhiteSpace(documento))
                return BadRequest("Tipo de documento y número son requeridos.");

            var citas = await _appDBContext.Citas
                .Where(c => c.TipoDocumento == tipoDocumento && c.Documento == documento)
                .ToListAsync();

            if (!citas.Any())
                return NotFound("No se encontraron citas para ese documento.");

            return Ok(citas);
        }

        // GET: api/Agendar/ConsultarActivas?tipoDocumento=CC&documento=123456789
        [HttpGet("ConsultarActivas")]
        public async Task<IActionResult> ConsultarActivas([FromQuery] string tipoDocumento, [FromQuery] string documento)
        {
            if (string.IsNullOrWhiteSpace(tipoDocumento) || string.IsNullOrWhiteSpace(documento))
                return BadRequest("Tipo de documento y número son requeridos.");

            var citas = await _appDBContext.Citas
                .Where(c => c.TipoDocumento == tipoDocumento && c.Documento == documento && c.Estado == 1)
                .ToListAsync();

            if (!citas.Any())
                return NotFound("No se encontraron citas activas para ese documento.");

            return Ok(citas);
        }
    }
}
