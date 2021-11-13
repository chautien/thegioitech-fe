import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Comment = (props) => {
  const { product_id, name } = props;

  return (
    <section className='comment-wrap'>
      <div className='comment'>
        <div className='comment-heading'>
          <h5 className='comment-heading-text'>Bình luận về {name}</h5>
        </div>
        <form className='comment-form'>
          <div className='form-field-top'>
            <input
              type='text'
              placeholder='Họ tên *'
              required
              className='comment-form-input'
            />
            <input
              type='text'
              placeholder='Điện thoại'
              className='comment-form-input'
            />
            <input
              type='text'
              placeholder='Email'
              className='comment-form-input'
            />
          </div>
          <div className='form-field-bottom'>
            <textarea
              placeholder='Nội dung. Tối thiểu 15 ký tự'
              required
              minLength='15'
              className='comment-form-area'
            ></textarea>
          </div>
          <div className='comment-form-action'>
            <p className='comment-form-action-text'>
              * Để gửi bình luận, bạn cần nhập tối thiểu trường họ tên và nội
              dung
            </p>
            <button type='submit' className='btn comment-form-action-btn'>
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Gửi bình luận</span>
            </button>
          </div>
        </form>
        <div className='comment-list'>
          <div className='comment-list-item'>
            <div className='comment-item-media'>
              <img
                src={'https://hoanghamobile.com/Content/web/img/no-avt.png'}
                alt='No avatar'
                className='rounded-circle comment-item-img'
              />
            </div>
            <div className='comment-item-content'>
              <div className='comment-item-detail'>
                <div className='comment-detail-heading'>
                  <p className='comment-detail-heading-text'>Chau Tien</p>
                  <time className='comment-detail-time'>15 phút trước</time>
                </div>
                <p className='comment-detail-text'>
                  Mình thấy có mấy chương trình Km, KH được chọn 1 hay được
                  hưởng tất cả? Mình có đặt đơn online rồi mà chưa thấy ai liên
                  hệ lại.
                </p>
              </div>
            </div>
          </div>
          <div className='comment-list-item'>
            <div className='comment-item-media'>
              <img
                src={'https://hoanghamobile.com/Content/web/img/no-avt.png'}
                alt='No avatar'
                className='rounded-circle comment-item-img'
              />
            </div>
            <div className='comment-item-content'>
              <div className='comment-item-detail'>
                <div className='comment-detail-heading'>
                  <p className='comment-detail-heading-text'>Chau Tien</p>
                  <time className='comment-detail-time'>15 phút trước</time>
                </div>
                <p className='comment-detail-text'>
                  Mình thấy có mấy chương trình Km, KH được chọn 1 hay được
                  hưởng tất cả? Mình có đặt đơn online rồi mà chưa thấy ai liên
                  hệ lại.
                </p>
              </div>
            </div>
          </div>
          <div className='comment-list-item'>
            <div className='comment-item-media'>
              <img
                src={'https://hoanghamobile.com/Content/web/img/no-avt.png'}
                alt='No avatar'
                className='rounded-circle comment-item-img'
              />
            </div>
            <div className='comment-item-content'>
              <div className='comment-item-detail'>
                <div className='comment-detail-heading'>
                  <p className='comment-detail-heading-text'>Chau Tien</p>
                  <time className='comment-detail-time'>15 phút trước</time>
                </div>
                <p className='comment-detail-text'>
                  Mình thấy có mấy chương trình Km, KH được chọn 1 hay được
                  hưởng tất cả? Mình có đặt đơn online rồi mà chưa thấy ai liên
                  hệ lại.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
