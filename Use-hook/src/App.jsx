import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

const App = () => {


// const [ value , setvalue] = useState([])

// const useNameValue  = useRef()
// const qualiValue = useRef()

const {register ,handleSubmit , formState: {errors} } = useForm()

  

function dataFunction(data){
  console.log(data);
  
}



  return (
    <>
   <div className="navbar bg-gray-400 mt-5 ">
  
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold ">Khan Brother's Academy</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
    </button>
  </div>
</div>


{/* form field started */}
<h1>Home</h1>
    <div className=" max-w-md mx-auto mt-10 bg-yellow-500 gap-5 p-6 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-6 text-center">Admission Portal</h2>
      <form onSubmit={handleSubmit(dataFunction)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 ">Username</label>
          <input
            type="text"
            name="username"
            // value={formData.username}
            // onClick={handleChange}
            // ref={useNameValue}
            // className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            // required
          {...register('fullname' , {required:true})}
          />
          {errors.fullname && <span className='text-red-500'>this field required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            // value={formData.fatherName}
            // onClick={handleChange}
            // ref={FatherValue}
            // className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            // required
            {...register('fathername' , {required:true})}
          />
          {errors.fathername && <span className='text-red'>this field required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">CNIC</label>
          <input
            type="text"
            name="cnic"
            // value={formData.cnic}
            // onClick={handleChange}
            // ref={nicValue}
            // className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            // required
            {...register('cnic' , {required:true})}
          />
          {errors.cnic && <span className='text-red'>this field required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="number"
            name="phone"
            // value={formData.phone}
            // onClick={handleChange}
            // ref={numberValue}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            // required
            {...register('phone' , {required:true})}
          />
          {errors.phone && <span className='text-red'>this field required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            // value={formData.dob}
            // onClick={handleChange}
            // ref={birthValue}
            // className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            // required
          {...register('DOF' , {required:true})}
          />
          {errors.DOF && <span className='text-red'>this field required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            // value={formData.gender}
            // onClick={handleChange}
            // ref={genderValue}
            // className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            // required
            {...register('gendar' , {required:true})}
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
            {errors.gendar && <span className='text-red-500'>this field required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            name="address"
            // value={formData.address}
            // onClick={handleChange}
            // ref={adressValue}
            rows="3"
            // className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            // required
            {...register('adress' , {required:true})}
          />
          {errors.adress && <span className='text-red'>this field required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Qualification</label>
          <input
            type="text"
            name="lastQualification"
            // value={formData.lastQualification}
            // onClick={handleChange}
            // ref={qualiValue}
            // className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            // required
            {...register('qualification' , {required:true})}
          />
          {/* console.log(); */}
          {errors.qualification && <span className='text-red'>this field required</span>}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
          // onClick={submitform}
         
        >
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default App

