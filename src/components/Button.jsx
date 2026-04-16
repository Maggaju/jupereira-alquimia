export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white hover:shadow-lg hover:shadow-purple-500/50',
    secondary: 'border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white',
    gold: 'bg-[#D4AF37] text-[#1a0f2e] hover:shadow-lg hover:shadow-yellow-500/50 font-bold'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
