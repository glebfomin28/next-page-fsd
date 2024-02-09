import { Flex, Result } from 'antd';

export const ForbiddenPage = () => {
  return (
    <Flex className="full-screen" vertical align="center" justify="center">
      <Result
        status="403"
        title="403"
        subTitle="Нет прав для доступа к этой странице"
        // extra={
        //   <Link to={getRouteMain()}>
        //     <Button type="primary">На главную</Button>
        //   </Link>
        // }
      />
    </Flex>
  );
};
export default ForbiddenPage;
