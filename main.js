let active_pool = false;

async function TS_RESQUEST_0() {
  if (active_pool) {
    setTimeout(() => {
      active_pool = !active_pool;
      console.log("0 S Over");
      TS_RESQUEST_0();
    }, 2000);
  } else {
    console.log("0 E Over");
    setTimeout(() => {
      TS_RESQUEST_0();
    }, 500);
  }
}

async function TS_RESQUEST_1() {
  if (!active_pool) {
    setTimeout(() => {
      active_pool = !active_pool;
      console.log("1 S Over");
      TS_RESQUEST_1();
    }, 3000);
  } else {
    console.log("1 E Over");
    setTimeout(() => {
      TS_RESQUEST_1();
    }, 500);
  }
}

TS_RESQUEST_0();
TS_RESQUEST_1();
