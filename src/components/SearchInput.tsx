import { useState } from "react";
import { useNavigate, Form } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";


function SearchInput() {
    const [term,setTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        navigate(`/search?term=${term}`)
        

    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="relative">
            <div className="absolute inset-y-0 flex items-center pl-3">
                <VscSearch className="h-5 w-5 text-gray-500"/>
            </div>
             <input value={term}
             placeholder="Search packages"
             className="pl-10 py-2 w-full border-9 shadow-none"
            onChange={e=>setTerm(e.target.value)}/>
        </div>
       
    </form>
  )
//Another approach to the above code
// return <Form action="/search">
//     <input name="term"/>
// </Form>
}
export default SearchInput