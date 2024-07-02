import { Button } from '@/components/ui/button'
import useLogout from '@/features/auth/login/hooks/useLogout'

export default function Home() {
  const {logOut} = useLogout()
  return (
    <>
    <h1 className="text-8xl text-red-400 text-center mt-10">Home</h1>
    <Button className='bg-red-500 p-7 text-xl text-white rounded-xl hover:bg-red-700' onClick={logOut}>Deconnexion</Button>
    </>
  )
}
