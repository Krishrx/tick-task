import {Pencil, Trash2} from 'lucide-react'
function TodoTask() {
  return (
    <section className="px-2 py-4 w-full space-y-4 flex flex-col justify-center items-center">
        <div className="w-8/12 md:w-4/12 space-y-6">
            
              <div className={`w-full h-fit bg-red-100 px-4 py-4 rounded-lg shadow-md flex flex-col`}>
                  <p className="hidden">{'id'}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, eos.</p>
                  <div className="self-end flex justify-between items-center gap-2">
                      <Pencil size={18} />
                      <Trash2 size={18}/>
                  </div>
              </div>

              

        </div>
    </section>
  )
}

export default TodoTask