
import { Icon } from '../../icon/icon.tsx'
import { Button } from '../../button/button.tsx'
import { Text } from '../../text/text.tsx'
import React, { Fragment } from 'react'
//default popup box
export function PopupBox({
	icon,
	text,
	cancelButton,
	confirmButton,
	Resolve,
	PopUpID
}) {
	return (
		<Fragment>
			<div
				className={`
				popup
				${!text && !confirmButton && !cancelButton ? 'popup-no-paragraphs' : ''}
			`}
				id={PopUpID}
			>
				{icon && <Icon icon={icon} />}
				{text && (
					<Text
						className={`${cancelButton || confirmButton ? 'pb-4' : ''}`}
						{...text}
					/>
				)}

				{(cancelButton || confirmButton) && (
					<>
						<div
							className={`w-full flex justify-center`}
							style={{display:"flex",justifyContent:"center", paddingTop: text || icon ? '1rem' : '' }}
						>
							{cancelButton && (
								<>
									<div className={`m-auto`} style={{width:"100%"}}>
										<Button
											onClick={() => {
												Resolve({ canceled: true })
											}}
											label={cancelButton.label || 'Cancel'}
											variant={cancelButton.variant}
										/>
									</div>
								</>
							)}
							{confirmButton && (
								<>
									<div className='m-auto w-min'>
										<Button
											onClick={() => {
												Resolve({ confirmed: true })
											}}
											variant={confirmButton.variant}
											label={confirmButton.label || 'Confirm'}
										/>
									</div>
								</>
							)}
						</div>
					</>
				)}
			</div>
		</Fragment>
	)
}
