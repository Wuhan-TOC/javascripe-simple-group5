# Lesson 3

## tips

-   方法签名中不建议有 bool 变量。

```java
  public Booking book(Customer aCustomer, boolean isPremium) {
    lorem().ipsum();
    dolor();
    if (isPremium) {
        sitAmet();
    }
    consectetur();
    if (isPremium) {
        adipiscing().elit();
    }
    else {
        aenean();
        vitaeTortor().mauris();
    }
    eu.adipiscing();
    }
```

to

```java
public Booking regularBook(Customer aCustomer) {
    return hiddenBookImpl(aCustomer, false);
}

public Booking premiumBook(Customer aCustomer) {
    return hiddenBookImpl(aCustomer, true);
}

private Booking hiddenBookImpl(Customer aCustomer, boolean isPremium) {...}
// 如果仅仅是因为标志值导致分支不同，逻辑相同，既要支持重用，又要保证接口的可读性，则可以将通用方法设置为私有。
```

## 任务拆分

开发一个给机器人存包的系统。Locker 总共有 10 个，每个 Locker 的规格还是 4x6

对于机器人来说
-   存包
    -   Given: 去一个有空Locker的系统中存包，When: 存包，Then:存包成功
    -   Given: 去一个没有有空Locker的系统中存包，When:存包，Then:存包失败
-   取包
    -   Given: 拿到一个正确的Ticket，When: 取包的时候，Then：取包成功
    -   Given: 拿到一个错误的Ticket，When: 取包的时候，Then：取包失败
-  按照顺序