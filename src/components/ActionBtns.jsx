import { Button } from "@material-tailwind/react"

function ActionBtns() {
  return (
    <section className="flex flex-col justify-center items-center px-2 py-4 w-full space-y-4">
        <Button ripple={true} color="deep-purple" variant="filled">Add</Button>
    </section>
  )
}

export default ActionBtns