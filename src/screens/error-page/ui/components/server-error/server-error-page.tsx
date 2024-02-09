import { Flex, Result } from 'antd';

const ServerErrorPage = () => {
  return (
    <Flex className="full-screen" vertical align="center" justify="center">
      <Result
        status="500"
        title="500"
        subTitle="Ошибка сервера"
        // extra={
        //   <Link to={getRouteMain()}>
        //     <Button type="primary">На главную</Button>
        //   </Link>
        // }
      />
    </Flex>
  );
};
export default ServerErrorPage;
