export const formatDate = (date: Date) => {
	const month = date.getMonth() + 1
	const day = String(date.getDate()).padStart(2, '0')
	const year = date.getFullYear()
	return `${day}/${month < 10 ? `0${month}`: month}/${year}`
}