import "./ModalTemplate.css"

const ModalTemplate = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? 'modal actived' : 'modal'}
      onMouseDown={() => setActive(false)}
    >
      <div
        className={
          active ? 'modal__template-content content__active' : 'modal__template-content'
        }
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalTemplate;