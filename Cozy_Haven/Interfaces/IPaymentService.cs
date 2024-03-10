using Cozy_Haven.Models.DTOs;
using Cozy_Haven.Models;

namespace Cozy_Haven.Interfaces
{
    public interface IPaymentService
    {
        public Task<Payment> GetPayment(int id);
        public Task<List<Payment>> GetAllPayments();
        public Task<Payment> AddPayment(Payment payment);
        public Task<Payment> UpdatePaymentMethod(int id, string paymentmethod);
        public Task<Payment> DeletePayment(int id);
        public Task<bool> Refund(int userId, float amount);
    }
}
