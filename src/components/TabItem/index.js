import './index.css'

const TabItem = props => {
  const {eachTab, onChangeTab, isActive} = props
  const {tabId, displayText} = eachTab

  const changeTab = () => {
    onChangeTab(tabId)
  }
  const addButtonStyle = isActive ? 'add-btn' : ''

  return (
    <li>
      <button className={`button ${addButtonStyle}`} onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
