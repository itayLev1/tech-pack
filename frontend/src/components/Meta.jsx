import { Helmet } from 'react-helmet-async'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content='description' />
      <meta name='keywords' content='keywords' />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Welcome to Tech-Pack",
  description: "We sell the best products for fair prices",
  keywords: "backline, tools, buy backline"
}

export default Meta