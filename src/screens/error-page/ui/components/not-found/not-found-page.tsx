import { Flex, Result } from 'antd';

const NotFoundPage = () => {
  return (
    <Flex className="full-screen" vertical align="center" justify="center">
      <Result
        status="404"
        title="404"
        subTitle="Страница не найдена"
        // extra={
        //   <Link to={getRouteMain()}>
        //     <Button type="primary">На главную</Button>
        //   </Link>
        // }
      />
    </Flex>
  );
};
export default NotFoundPage;
