import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const OnClickTab = () => {
    updateActiveTabId(tabId)
  }
  const ActiveTabId= isActive ? "active-tab-btn" : ""

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${ ActiveTabId}`} onClick={OnClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
