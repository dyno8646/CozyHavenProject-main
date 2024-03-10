using Cozy_Haven.Exceptions;
using Cozy_Haven.Interfaces;
using Cozy_Haven.Mappers;
using Cozy_Haven.Models;
using Cozy_Haven.Models.DTOs;

namespace Cozy_Haven.Services
{
    public class PaymentService:IPaymentService
    {
        private readonly IRepository<int, Payment> _repository;
        private readonly ILogger<PaymentService> _logger;

        public PaymentService(IRepository<int, Payment> repository,ILogger<PaymentService> logger)
        {
            _repository = repository;
            _logger = logger;
        }
        public async Task<Payment> AddPayment(Payment payment)
        {
            Payment newpayment = await _repository.Add(payment);
            return await _repository.Add(newpayment);
        }
        public async Task<Payment> DeletePayment(int id)
        {
            var payment = await GetPayment(id);
            if (payment != null)
            {
                await _repository.Delete(id);
                return payment;
            }
            throw new NoPaymentFoundException();
        }
        public Task<List<Payment>> GetAllPayments()
        {
            var payments = _repository.GetAll();
            if (payments != null) return payments;
            throw new NoPaymentFoundException();
        }
        public Task<Payment> GetPayment(int id)
        {
            var payment = _repository.GetById(id);
            if (payment != null) return payment;
            throw new NoPaymentFoundException();
        }
        public async Task<Payment> UpdatePaymentMethod(int id, string paymentmethod)
        {
            var payment = await GetPayment(id);
            if (payment != null)
            {
                payment.PaymentMethod = paymentmethod;
                await _repository.Update(payment);
                return payment;
            }
            throw new NoPaymentFoundException();
        }


        public async Task<bool> Refund(int userId, float amount)
        {
            
            Console.WriteLine($"Refunding {amount} to user with ID {userId}");
            return true;
        }
        


        
    }
}
