using Cozy_Haven.Interfaces;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;
using Cozy_Haven.Services;
using Microsoft.Extensions.Logging;
using Moq;
using NUnit.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cozy_Haven_Testing
{
    public class DestinationTesting
    {
        private IDestinationService _destinationService;
        private Mock<IRepository<int, Destination>> _mockDestinationRepo;
        private Mock<ILogger<DestinationService>> _logger;

        [SetUp]
        public void SetUp()
        {
            _mockDestinationRepo = new Mock<IRepository<int, Destination>>();
            _logger = new Mock<ILogger<DestinationService>>();
            _destinationService = new DestinationService(_mockDestinationRepo.Object, _logger.Object);
        }

        [Test]
        public async Task AddDestination()
        {
            // Arrange
            var destinationDTO = new DestinationDTO { Name = "Test Destination", Description = "Test Description" };

            _mockDestinationRepo.Setup(x => x.Add(It.IsAny<Destination>())).ReturnsAsync(new Destination());

            // Act
            var result = await _destinationService.AddDestination(destinationDTO);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task DeleteDestination()
        {
            // Arrange
            var destinationId = 1;

            _mockDestinationRepo.Setup(x => x.Delete(destinationId)).ReturnsAsync(new Destination());

            // Act
            var result = await _destinationService.DeleteDestination(destinationId);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task GetAllDestinations()
        {
            // Arrange
            var destinations = new List<Destination> { new Destination(), new Destination() };

            _mockDestinationRepo.Setup(x => x.GetAll()).ReturnsAsync(destinations);

            // Act
            var result = await _destinationService.GetAllDestinations();

            // Assert
            Assert.AreEqual(destinations.Count, result.Count);
        }

        [Test]
        public async Task GetDestination()
        {
            // Arrange
            var destinationId = 1;

            _mockDestinationRepo.Setup(x => x.GetById(destinationId)).ReturnsAsync(new Destination());

            // Act
            var result = await _destinationService.GetDestination(destinationId);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task UpdateDestination()
        {
            // Arrange
            var destination = new Destination { DestinationId = 1, Name = "Test Destination", Description = "Test Description" };

            _mockDestinationRepo.Setup(x => x.Update(destination)).ReturnsAsync(new Destination());

            // Act
            var result = await _destinationService.UpdateDestination(destination);

            // Assert
            Assert.IsNotNull(result);
        }
    }
}
