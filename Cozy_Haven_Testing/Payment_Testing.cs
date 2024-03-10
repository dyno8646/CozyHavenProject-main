using Cozy_Haven.Interfaces;
using Cozy_Haven.Models;
using Cozy_Haven.Services;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cozy_Haven_Testing
{
    public class Payment_Testing
    {
        private IPaymentService _paymentService;
        private Mock<IRepository<int, Payment>> _mockPaymentRepo;
        private Mock<ILogger<PaymentService>> _logger;
        [SetUp]
        public void SetUp() {
            _mockPaymentRepo=new Mock<IRepository<int, Payment>>();
            _logger = new Mock<ILogger<PaymentService>>();
            _paymentService = new PaymentService(_mockPaymentRepo.Object, _logger.Object);

        }
        [Test]
        public async Task AddPayment()
        {
            // Arrange
            var payment = new Payment { PaymentId = 1 };

            _mockPaymentRepo.Setup(x => x.Add(It.IsAny<Payment>())).ReturnsAsync(payment);

            // Act
            var result = await _paymentService.AddPayment(payment);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task DeletePayment()
        {
            // Arrange
            var paymentId = 1;
            var payment = new Payment { PaymentId = paymentId };

            _mockPaymentRepo.Setup(x => x.GetById(paymentId)).ReturnsAsync(payment);

            // Act
            var result = await _paymentService.DeletePayment(paymentId);

            // Assert
            Assert.IsNotNull(result);
        }

        [Test]
        public async Task GetAllPayments()
        {
            // Arrange
            var payments = new List<Payment> { new Payment { PaymentId = 1 }, new Payment { PaymentId = 2 } };

            _mockPaymentRepo.Setup(x => x.GetAll()).ReturnsAsync(payments);

            // Act
            var result = await _paymentService.GetAllPayments();

            // Assert
            Assert.That(result.Count, Is.EqualTo(2));
        }

        [Test]
        public async Task GetPayment()
        {
            // Arrange
            var paymentId = 1;
            var payment = new Payment { PaymentId = paymentId };

            _mockPaymentRepo.Setup(x => x.GetById(paymentId)).ReturnsAsync(payment);

            // Act
            var result = await _paymentService.GetPayment(paymentId);

            // Assert
            Assert.That(result.PaymentId, Is.EqualTo(payment.PaymentId));
        }

        [Test]
        public async Task UpdatePaymentMethod_ShouldReturnUpdatedPayment()
        {
            // Arrange
            var paymentId = 1;
            var payment = new Payment { PaymentId = paymentId, PaymentMethod = "Method1" };
            var newPaymentMethod = "Method2";

            _mockPaymentRepo.Setup(x => x.GetById(paymentId)).ReturnsAsync(payment);

            // Act
            var result = await _paymentService.UpdatePaymentMethod(paymentId, newPaymentMethod);

            // Assert
            Assert.That(result.PaymentMethod, Is.EqualTo(newPaymentMethod));
        }

        [Test]
        public async Task Refund_ShouldReturnTrue()
        {
            // Arrange
            var userId = 1;
            var amount = 100.0f;

            // Act
            var result = await _paymentService.Refund(userId, amount);

            // Assert
            Assert.IsTrue(result);
        }

    }
}
