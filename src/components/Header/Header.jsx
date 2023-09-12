import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex items-center justify-between p-4 mx-5 border-b-2'>
      <h1 className="text-3xl text-center font-bold">Knowladge kafe</h1>
      <img src={profile} alt="" />
    </div>
  )
}

export default Header
