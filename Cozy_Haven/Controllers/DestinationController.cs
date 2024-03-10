using Cozy_Haven.Interfaces;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;

namespace Cozy_Haven.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("ReactPolicy")]
    [ExcludeFromCodeCoverage]
    public class DestinationController : ControllerBase
    {
        private readonly IDestinationService _destinationService;

        public DestinationController(IDestinationService destinationService)
        {
            _destinationService = destinationService;
        }


        [HttpPost("AddDestination")]
        public async Task<ActionResult<Destination>> AddDestination(DestinationDTO destinationDTO)
        {
            try
            {
                // AddDestination method now accepts DestinationDTO
                var newDestination = await _destinationService.AddDestination(destinationDTO);
                return CreatedAtAction(nameof(GetDestination), new { name = newDestination.Name }, newDestination);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to add destination: {ex.Message}");
            }
        }

        [HttpGet("GetAllDestinations")]
        public async Task<ActionResult<List<Destination>>> GetAllDestinations()
        {
            try
            {
                var destinations = await _destinationService.GetAllDestinations();
                return Ok(destinations);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to retrieve destinations: {ex.Message}");
            }
        }

        [HttpGet("GetByDestinationId")]
        public async Task<ActionResult<Destination>> GetDestination(int id)
        {
            try
            {
                var destination = await _destinationService.GetDestination(id);
                if (destination == null)
                {
                    return NotFound();
                }
                return Ok(destination);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to retrieve destination: {ex.Message}");
            }
        }

        [HttpPut("{id}/update-destination")]
        public async Task<ActionResult<Destination>> UpdateDestination(int id, Destination destination)
        {
            try
            {
                if (id != destination.DestinationId)
                {
                    return BadRequest("Destination ID mismatch");
                }

                var updatedDestination = await _destinationService.UpdateDestination(destination);
                if (updatedDestination == null)
                {
                    return NotFound();
                }

                return Ok(updatedDestination);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to update destination: {ex.Message}");
            }
        }

        [HttpDelete("DeleteDestinationById")]
        public async Task<ActionResult<Destination>> DeleteDestination(int id)
        {
            try
            {
                var destinationToDelete = await _destinationService.DeleteDestination(id);
                if (destinationToDelete == null)
                {
                    return NotFound();
                }
                return Ok(destinationToDelete);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to delete destination: {ex.Message}");
            }
        }
    }
}