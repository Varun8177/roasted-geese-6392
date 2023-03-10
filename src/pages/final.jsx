import { useEffect } from "react";
import Link from "next/link";
import { Box, Center, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { RESETCART } from "@/redux/admin/admin.types";
const Final = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: RESETCART });
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Center h={"80vh"}>
        <Box>
          <Image
            src="https://tse1.mm.bing.net/th?id=OIP.MT07Og6cRde17N6Ga5IWfwHaFE&pid=Api&P=0"
            alt=""
          />
        </Box>
      </Center>
      <Center>
        <Link href="/">
          {" "}
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => {
              dispatch({ type: RESETCART });
            }}
          >
            Home
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default Final;
