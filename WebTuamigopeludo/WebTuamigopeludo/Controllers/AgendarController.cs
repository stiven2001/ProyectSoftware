using Microsoft.AspNetCore.Mvc;
using WebTuamigopeludo.Data;
using WebTuamigopeludo.Models;
using Microsoft.EntityFrameworkCore;

namespace WebTuamigopeludo.Controllers
{
    public class AgendarController : Controller
    {
        private readonly AppDBContext _appDBContext;
        public AgendarController(AppDBContext appDBContext)
        {
            _appDBContext = appDBContext;
        }

        [HttpGet]
        public async Task<IActionResult> Lista()
        {
            List<Citas> lista = await _appDBContext.Citas.ToListAsync();
            return View(lista);
        }


        //Get: /Agendar
        public IActionResult Agendar()

        {
            return View();
        }
        // POST: /Agendar
        [HttpPost]
      
        public async Task <IActionResult> Agendar(Citas citas)
        {
            if (ModelState.IsValid)
            {
               await _appDBContext.Citas.AddAsync(citas);   
               await _appDBContext.SaveChangesAsync();
                return RedirectToAction(nameof(Lista));
                //return RedirectToAction("Confirmacion"); // Puedes crear una vista para mostrar mensaje de éxito
            }
            return View(citas); // Retorna la vista con errores de validación si los hay
        }


    }
    }


