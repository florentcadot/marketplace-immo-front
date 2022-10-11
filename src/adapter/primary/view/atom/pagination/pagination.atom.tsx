import React from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.css'

interface Props {
  onPageChange: ({ selected }: { selected: number }) => void
  pageCount: number
}

export const Pagination = ({ onPageChange, pageCount }: Props) => (
	<div className="pagination">
		<ReactPaginate
			marginPagesDisplayed={1}
			pageCount={pageCount}
			pageRangeDisplayed={2}
			breakClassName={'page'}
			pageLinkClassName={'page'}
			activeLinkClassName={'active'}
			containerClassName={'flex justify-center pt-10 items-center'}
			initialPage={0}
			onPageChange={onPageChange}
		/>
	</div>
)
