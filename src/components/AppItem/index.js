import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appid, appName, imageUrl, category} = eachApp
  return (
    <li className="each-card">
      <img src={imageUrl} alt={appName} className="image-style" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
